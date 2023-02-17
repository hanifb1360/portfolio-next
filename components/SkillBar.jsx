import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import classNames from 'classnames';

const SkillBar = ({ skill, percentage }) => {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const width = intersection && intersection.intersectionRatio >= 0.5 ? `${percentage}%` : '0';

  const barClasses = classNames('bg-sky-600', 'rounded-full', 'py-1', 'px-3', {
    'transition-all duration-1000': intersection && intersection.intersectionRatio >= 0.5,
  });

  return (
    <div className="flex flex-col justify-between">
      <div className="w-full text-white">{skill}</div>
      <div className="flex items-center mb-2">
        <div className="w-full mb-4 mt-2 bg-gray-300 rounded-full" ref={ref}>
          <div className={barClasses} style={{ width }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
