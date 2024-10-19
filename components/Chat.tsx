// import React, { useEffect, useState } from "react";
// import io, { Socket } from "socket.io-client";
// import styles from "@/styles/components/ChatComponent.module.scss";

// interface IMessage {
//   senderId: string;
//   receiverId: string;
//   message: string;
// }

// interface IUser {
//   id: string;
//   name: string;
//   tipoUsuario: "Colegio" | "Padre/Estudiante";
// }

// interface ChatComponentProps {
//   userId: string;
// }

// interface UserListProps {
//   users: IUser[];
//   onUserSelect: (user: IUser) => void;
// }

// interface ChatWindowProps {
//   messages: IMessage[];
//   currentUserId: string;
// }

// const socket: Socket = io("http://localhost:8083");

// const ChatComponent: React.FC<ChatComponentProps> = ({ userId }) => {
//   const [users, setUsers] = useState<IUser[]>([]);
//   const [messages, setMessages] = useState<IMessage[]>([]);
//   const [currentChatUser, setCurrentChatUser] = useState<IUser | null>(null);
//   const [newMessage, setNewMessage] = useState<string>("");
//   const [showUserList, setShowUserList] = useState<boolean>(false);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   useEffect(() => {
//     socket.emit("joinChat", userId);
//     socket.emit("getUsers");

//     socket.on("usersReceived", (userList: IUser[]) => {
//       console.log("Received users:", userList);
//       setUsers(userList);
//       console.log("User List:", userList);
//     });

//     socket.on("receiveMessage", (data: IMessage) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       socket.off("usersReceived");
//       socket.off("receiveMessage");
//       socket.disconnect();
//     };
//   }, [userId]);

//   const handleUserSelect = (user: IUser) => {
//     setCurrentChatUser(user);
//     socket.emit(
//       "getMessages",
//       { userId, otherUserId: user.id },
//       (chatHistory: IMessage[]) => {
//         setMessages(chatHistory);
//       }
//     );
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "" && currentChatUser) {
//       const messageData = {
//         senderId: userId,
//         receiverId: currentChatUser.id,
//         message: newMessage,
//       };
//       socket.emit("sendMessage", messageData);
//       setMessages((prevMessages) => [...prevMessages, messageData]);
//       setNewMessage("");
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       console.log(`Searching for: ${searchTerm}`);
//     }
//   };

//   // Filtrar usuarios
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
//   );

//   console.log("Filtered Users:", filteredUsers); // Mostrar usuarios filtrados

//   return (
//     <div className={styles.chatComponent}>
//       <div
//         className={`${styles.userListBar} ${
//           showUserList ? styles.expanded : ""
//         }`}
//       >
//         <button onClick={() => setShowUserList(!showUserList)}>
//           {showUserList ? "Hide Users" : "Show Users"}
//         </button>
//         {showUserList && (
//           <>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Search Users"
//               className={styles.searchInput}
//             />
//             <UserList users={filteredUsers} onUserSelect={handleUserSelect} />
//           </>
//         )}
//       </div>

//       {currentChatUser && (
//         <div className={styles.chatWindowContainer}>
//           <ChatWindow messages={messages} currentUserId={userId} />
//           <div className={styles.chatBox}>
//             <input
//               type="text"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type a message"
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
//   return (
//     <div className={styles.userList}>
//       <h4>Chat Users</h4>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} onClick={() => onUserSelect(user)}>
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// const ChatWindow: React.FC<ChatWindowProps> = ({ messages, currentUserId }) => {
//   return (
//     <div className={styles.chatWindow}>
//       {messages.map((msg, index) => (
//         <div
//           key={index}
//           className={`${styles.message} ${
//             msg.senderId === currentUserId ? styles.sent : styles.received
//           }`}
//         >
//           <strong>{msg.senderId === currentUserId ? "You" : "Them"}: </strong>
//           {msg.message}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ChatComponent;
