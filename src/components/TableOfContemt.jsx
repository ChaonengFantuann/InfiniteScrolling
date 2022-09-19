import { useState } from 'react';
import useHeadingsData from '../hooks/useHeadingsData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../App.css';


const TableOfContent = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId)

  const Headings = ({ headings, activeId }) => (
    <ul className='nav'>
      {(headings || []).map(heading => (
        <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
          <a
            href={`#${heading.id}`}
            onClick={e => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id} className={child.id === activeId ? 'active' : ''}>
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${heading.id}`).scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className='side-content'>
      <div className='card card-a' />
      <div className='card card-b' />
      <Headings headings={nestedHeadings} activeId={activeId}/>
    </div>
  );
};

export default TableOfContent;