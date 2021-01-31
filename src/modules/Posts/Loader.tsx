import ContentLoader from 'react-content-loader';

export default function PostLoader() {
  return (
    <ContentLoader
      speed={1}
      width="90%"
      height={280}
      backgroundColor="#e2e6e8"
      foregroundColor="#cfcfcf"
    >
      <rect x="0" y="0" rx="15" ry="15" width="100%" height="80" />
      <rect x="0" y="100" rx="15" ry="15" width="100%" height="80" />
      <rect x="0" y="200" rx="15" ry="15" width="100%" height="80" />
    </ContentLoader>
  );
}