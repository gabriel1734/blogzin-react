export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text = '', slug = '', title = '' } = data;

    return {
      footerHtml: footer_text,
      slug: slug,
      title: title,
    };
  });
};
