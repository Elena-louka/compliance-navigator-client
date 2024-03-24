import React, { useState } from 'react';
import {
  PencilIcon,
  ChevronUpIcon,
  UserIcon,
  ClipboardListIcon,
  CalendarIcon,
  MailIcon,
} from '@heroicons/react/solid';

function QuestionCard({ question, onEdit, onSelect, isSelected }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? 'N/A' : date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderInfo = (info) => info || 'N/A';

  const toggleAnswerExpansion = (event) => {
    event.stopPropagation(); 
    setIsAnswerExpanded(!isAnswerExpanded);
  };

  const isLongAnswer = question.Answer && question.Answer.length > 100;
  const displayedAnswer = isLongAnswer && !isAnswerExpanded ? `${question.Answer.substring(0, 100)}...` : question.Answer;

  return (
    <div className={`bg-white shadow-md rounded-lg mb-4 overflow-hidden ${isExpanded ? 'expanded' : 'h-24'} flex flex-col justify-between transition-all cursor-pointer`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="p-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => { e.stopPropagation(); onSelect(question.id); }}
            className="form-checkbox h-4 w-4 text-blue-500 mr-3"
            onClick={(e) => e.stopPropagation()} 
          />
          <div className="flex-grow">
            <p className="font-semibold text-gray-800 text-xs">{renderInfo(question.Question)}</p>
            <p className={`text-gray-600 text-xs ${isLongAnswer ? 'cursor-pointer' : ''}`} onClick={isLongAnswer ? toggleAnswerExpansion : undefined}>
              {displayedAnswer}
              {isLongAnswer && <span className="text-blue-500 text-xs ml-2">{isAnswerExpanded ? 'Show Less' : 'Read More'}</span>}
            </p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); onEdit(question); }} className="ml-4 p-1 rounded hover:bg-gray-200">
            <PencilIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        {isExpanded && (
          <div className="pt-4">
            <DetailRow icon={UserIcon} title="Created By:" detail={renderInfo(question['Created By'])} />
            <DetailRow icon={MailIcon} title="Assigned To:" detail={renderInfo(question['Assigned To'])} />
            <DetailRow icon={ClipboardListIcon} title="Properties:" detail={renderInfo(question.Properties)} />
            <DetailRow icon={CalendarIcon} title="Created At:" detail={formatDate(question['Created At'])} />
            <DetailRow icon={CalendarIcon} title="Updated At:" detail={formatDate(question['Updated At'])} />
            <DetailRow icon={UserIcon} title="Updated By:" detail={renderInfo(question['Updated By'])} />
          </div>
        )}
      </div>
      {isExpanded && <button onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }} className="w-full p-2 text-center text-gray-400 hover:text-blue-600">
        <ChevronUpIcon className="h-5 w-5 mx-auto" />
      </button>}
    </div>
  );
}

function DetailRow({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-center space-x-2 text-xs py-1">
      <Icon className="h-4 w-4 text-gray-400" />
      <span className="font-medium text-gray-800">{title}</span>
      <span className="text-gray-600">{detail}</span>
    </div>
  );
}

export default QuestionCard;
