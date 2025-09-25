type WysiwygContentProps = {
  children: string;
};

const WysiwygContent = ({ children }: WysiwygContentProps) => {
  return (
    <div
      className="prose prose-invert max-w-none text-white"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default WysiwygContent;
