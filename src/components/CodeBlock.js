import React from "react";

export default function CodeBlock1() {
  return (
    <div className="mt-2">
      <pre className="p-4 overflow-auto text-gray-800 transition border rounded-lg shadow-sm bg-light dark:bg-dark dark:shadow-neutral-700/70 dark:border-neutral-700 dark:text-gray-100">
        <code className="font-mono text-sm">
          <span className="text-blue-600 dark:text-blue-400">{"{"}</span>
          {"\n"}
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">id</span>:{" "}
          <span className="text-green-600 dark:text-green-400">number</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">|</span>{" "}
          <span className="text-green-600 dark:text-green-400">string</span>,
          {"\n"}
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">
            title
          </span>:{" "}
          <span className="text-green-600 dark:text-green-400">string</span>,
          {"\n"}
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">
            body
          </span>:{" "}
          <span className="text-green-600 dark:text-green-400">string</span>,
          {"\n"}
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">archived</span>
          : <span className="text-blue-600 dark:text-blue-400">boolean</span>,
          {"\n"}
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">
            createdAt
          </span>
          : <span className="text-green-600 dark:text-green-400">string</span>,
          {"\n"}
          <span className="text-blue-600 dark:text-blue-400">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
