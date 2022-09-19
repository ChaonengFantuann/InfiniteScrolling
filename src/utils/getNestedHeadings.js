const getNestedHeadings = headingElements => {
  const nestedHeadings = [];

  headingElements.forEach(heading => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({ id, title });
    }
  });
  
  return nestedHeadings;
};

export default getNestedHeadings;