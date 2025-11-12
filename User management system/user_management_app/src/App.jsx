import React, { useEffect, useState } from "react";
import "./App.css"; // You can style this later

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState("");

  // 1️⃣ Fetch user list on mount
  useEffect(() => {
    let ignore = false; // cleanup flag
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        if (!ignore) {
          setUsers(data);
          setFilteredUsers(data);
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoadingUsers(false);
      }
    };
    fetchUsers();

    // Cleanup
    return () => {
      ignore = true;
    };
  }, []);

  // 2️⃣ Fetch posts when a user is selected
  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      if (!selectedUser) return;
      try {
        setLoadingPosts(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        if (!ignore) setPosts(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoadingPosts(false);
      }
    };
    fetchPosts();

    // Cleanup
    return () => {
      ignore = true;
    };
  }, [selectedUser]);

  // 3️⃣ Search filtering effect
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="user-management">
      <h1 className="title">👥 User Management System</h1>

      {/* 🔍 Search box */}
      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* 🌀 Loading & Error States */}
      {loadingUsers && <p className="loading">Loading users...</p>}
      {error && <p className="error">{error}</p>}

      <div className="content">
        {/* 👤 User List */}
        <div className="user-list">
          <h2>All Users</h2>
          <ul>
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`user-item ${
                  selectedUser?.id === user.id ? "active" : ""
                }`}
              >
                <p className="name">{user.name}</p>
                <p className="email">{user.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 📋 User Details */}
        <div className="user-details">
          {selectedUser ? (
            <>
              <h2>User Details</h2>
              <div className="user-card">
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Company:</strong> {selectedUser.company.name}</p>
                <p><strong>Website:</strong> {selectedUser.website}</p>
              </div>

              {/* 📝 User Posts */}
              <h3>User Posts</h3>
              {loadingPosts ? (
                <p className="loading">Loading posts...</p>
              ) : posts.length > 0 ? (
                <ul className="post-list">
                  {posts.map((post) => (
                    <li key={post.id} className="post-item">
                      <h4>{post.title}</h4>
                      <p>{post.body}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No posts found.</p>
              )}
            </>
          ) : (
            <p className="hint">Select a user to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
