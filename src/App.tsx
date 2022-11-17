import { useState } from "react";
import "./App.css";

function App() {
  const tree = {
    children: [
      {
        name: "src",
        children: [
          {
            name: "assets",
            children: [
              {
                name: "react-logo.svg",
              },
              {
                name: "profile-pic.png",
              },
            ],
          },
          {
            name: "app.tsx",
          },
          {
            name: "index.css",
          },
          {
            name: ".gitignore",
          },
        ],
      },
      {
        name: "node_modules",
        children: [
          {
            name: "fsevents",
            children: [
              {
                name: "someFile.tsx",
              },
            ],
          },
        ],
      },
      {
        name: ".env-sample",
      },
      {
        name: "public",
        children: [
          {
            name: "images",
            children: [
              {
                name: "avatar.png",
              },
              {
                name: "logo.jpeg",
              },
            ],
          },
          {
            name: "vite.svg",
          },
        ],
      },
    ],
  };
  type Entries = {
    name: string;
    children?: Entries[];
  };
  const RecursiveMapping = ({
    entry,
    depth,
  }: {
    entry: Entries;
    depth: number;
  }) => {
    const [showChildren, setShowChildren] = useState(false);
    return (
      <div>
        {entry.children && (
          <button
            className="expand-btn"
            onClick={() => {
              setShowChildren(!showChildren);
            }}
          >
            {" "}
            +
          </button>
        )}
        {entry.name}
        {showChildren && (
          <div style={{ paddingLeft: `${depth * 8}px` }}>
            {entry.children?.map((entry, idx) => {
              return (
                <RecursiveMapping key={idx} entry={entry} depth={depth + 1} />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      {tree.children.map((entry, idx) => (
        <RecursiveMapping key={idx} entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
