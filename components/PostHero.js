export default function PostHero(post) {
  return (
<div className="bg-transparent pt-16 lg:py-24">
  <div className={post.background + " bg-gradient-to-r pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative"}>
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="relative lg:-my-8">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-gray-50 lg:hidden"></div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
            <img className="object-cover lg:h-full lg:w-full" src={post.urlToImage} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
          <blockquote>
            <div>
              <a href={post.url} className="mt-6 text-2xl font-medium text-white">
              {post.title}
              </a>
            </div>
            <footer className="mt-6">
            <span className="capitalize text-base inline-flex items-center px-2 py-0.5 rounded font-medium bg-gray-100 text-gray-800">
              {post.category}
            </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
