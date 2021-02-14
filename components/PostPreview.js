import Head from "next/head";

export default function PostPreview(post) {

    const renderPreviewImage = () => {
      if(post.urlToImage) {
        return <img className="h-48 w-full object-cover" src={post.urlToImage} alt="" />
      } else {
        return <div className="object-cover h-48 w-full rounded-t bg-gray-700 flex justify-center">
                  <p className="text-xl text-center flex items-center text-gray-400">
                    {post.source ?? post.author}
                  </p>
                </div>
      }
    }

  return (
    <article className="flex focus:outline-none">
      <a href={post.url} className="flex">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            {renderPreviewImage()}

          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <span className="hover:underline">
                {post.source ?? post.author}
                </span>
              </p>
              <span className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
