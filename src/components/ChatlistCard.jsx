const ChatlistCard = ({ question, answer }) => {
  return (
    <li className="bg-gray-50 p-4 rounded-md text-lg shadow-md shadow-gray-50 font-Cafe24Shiningstar">
      <div className="mb-2 font-semibold">Q. {question}</div>
      <div>A. {answer}</div>
    </li>
  );
};

export default ChatlistCard;
