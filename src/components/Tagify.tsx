import React, { useState } from 'react';
import classNames from 'classnames';

interface TagifyProps {
  size?: 'sm' | 'lg' | 'default';
  suggestions?: string[];
}

const Tagify: React.FC<TagifyProps> = ({ size = 'default', suggestions = [] }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleAddTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const tagifyClass = classNames('tagify', {
    'form-control-sm': size === 'sm',
    'form-control-lg': size === 'lg',
    'form-control': size === 'default',
  });

  return (
    <div className={tagifyClass}>
      <div className="tagify__tags">
        {tags.map(tag => (
          <span key={tag} className="tagify__tag">
            <span className="tagify__tag-text">{tag}</span>
            <button className="tagify__tag__removeBtn" onClick={() => handleRemoveTag(tag)}></button>
          </span>
        ))}
      </div>

      <input
        type="text"
        className="tagify__input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
          }
        }}
        placeholder="Search or add tags"
      />
      
      {/* Dropdown suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="tagify__dropdown">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="tagify__dropdown__item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tagify;
