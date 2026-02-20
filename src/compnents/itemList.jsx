import { useState } from "react";
import { FaTrash, FaCheck, FaEdit, FaSave } from "react-icons/fa";
import "./itemList.css";

function ItemList({ taskName, deleteTask, completeTask, updateTask, isCompleted }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(taskName);

  function handleUpdate() {
    setIsEditing(true);
  }

  function handleSave() {
    if (editedText.trim() === "") return;

    if (updateTask) {
      updateTask(taskName, editedText);
    }

    setIsEditing(false);
  }

  return (
    <ul>
      <li className={`to-do-item ${isCompleted ? "completed" : ""}`}>

        {/* TEXT / INPUT */}
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          <p>{taskName}</p>
        )}

        <div className="buttons">

          {isCompleted ? (
            <button onClick={() => deleteTask(taskName)}>
              <FaTrash />
            </button>
          ) : (
            <>
              {isEditing ? (
                <button onClick={handleSave}>
                  <FaSave />
                </button>
              ) : (
                <button onClick={handleUpdate}>
                  <FaEdit />
                </button>
              )}

              <button onClick={() => completeTask(taskName)}>
                <FaCheck />
              </button>

              <button onClick={() => deleteTask(taskName)}>
                <FaTrash />
              </button>
            </>
          )}

        </div>

      </li>
    </ul>
  );
}

export default ItemList;