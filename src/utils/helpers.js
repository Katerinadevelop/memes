export const getNormalizedData = (data) => {
  return data.children.map((item) => ({
    title: item.data.title,
    url: item.data.url,
    preview: item.data.preview,
    id: item.data.id,
    author: item.data.author,
    subreddit: item.data.subreddit,
  }));
};
