export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false } = false,
    id: sectionId = '',
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false } = false,
    id: sectionId = '',
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid',
    title = '',
    description = '',
    metadata: { background = false } = false,
    text_grid: grid = [],
  } = section;
  return {
    component,
    title,
    description,
    background,
    grid: grid.map((text) => {
      const { title = '', description = '', id = '' } = text;

      return {
        id,
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    description = '',
    metadata: { background = false } = false,
    image_grid: grid = [],
  } = section;
  return {
    component,
    title,
    description,
    background,
    grid: grid.map((image) => {
      const { url: srcImg = '', alternativeText: altText, id = '' } = image;
      return {
        id,
        srcImg,
        altText,
      };
    }),
  };
};
