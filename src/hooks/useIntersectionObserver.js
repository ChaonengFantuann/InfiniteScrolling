import { useEffect, useRef } from "react";

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({})
  // headingElementsRef.current { <id>: IntersectionObserverEntry<Object> }

  useEffect(() => {
    const callback = headings => {
      /* 
        使用 useRef hook 存储被观察对象 
      */
      // headings<Array> -> IntersectionObserverEntry<Object>(被观察对象)
      headingElementsRef.current = headings.reduce((map, headingElememt) => {
        // headingElement type IntersectionObserverEntry<Object>
        map[headingElememt.target.id] = headingElememt;
        // headingElememt.target 被观察的目标元素，是一个 DOM 节点对象
        // map<Object>
        return map;
      }, headingElementsRef.current);

      /*
        获得所有可见标题列表
      */
      const visibleHeadings = []; // Array<IntersectionObserverEntry<Object>>
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        // headingElement type IntersectionObserverEntry<Object>
        if (headingElement.isIntersecting)
          visibleHeadings.push(headingElement);
      });
      console.log(visibleHeadings);

      const getIndexFromId = id =>
        headingElements.findIndex((heading) => heading.id === id); // return <Number>

      if (visibleHeadings.length === 1) {
        // setActiveId<setState>
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    }; // clallback

    const option = {
      rootMargin: '0px 0px -60% 0px',
    }
    
    const observer = new IntersectionObserver(callback, option);

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    // console.log(document.querySelectorAll('h2, h3')); // NodeList[{}]
    // console.log(headingElements); // [{}]

    headingElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

export default useIntersectionObserver;