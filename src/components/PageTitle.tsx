type PageTitleProps = {
  title: string;
  description?: string;
  customDescriptionSpacing?: string;
};

const PageTitle = ({
  title,
  description,
  customDescriptionSpacing,
}: PageTitleProps) => {
  return (
    <div>
      {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
      {description && (
        <p
          className={`${customDescriptionSpacing ? customDescriptionSpacing : "mb-8"} text-lg text-zinc-800`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
