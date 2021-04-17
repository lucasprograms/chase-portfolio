import * as React from 'react'

const FinalPrototype = ({
  highlightColor,
  prototypeLink,
  backgroundColor,
  videoSrc,
  videoTitle,
  loads,
  finalThoughts,
}) => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-12 pt-10 pb-20 px-5 2xl:px-0"
      style={{ backgroundColor }}
      id="prototype"
    >
      <div className="lg:col-start-3 lg:col-span-10 grid lg:grid-cols-6">
        <h2 className="font-serif text-4xl mb-10 lg:col-span-6">
          The Final Prototype
        </h2>
        <div className="lg:col-span-5 movie-responsive-height">
          <iframe
            src={videoSrc}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            className="relative top-0 left-0 w-full h-full"
          />
        </div>
        <div className="lg:col-span-5 mt-10 text-center">
          <div>
            <span className="text-2xl">Want to explore it yourself?</span>
          </div>
          <div className="mt-2">
            <a
              href={prototypeLink}
              className="p-1 hover:underline"
              style={{ backgroundColor: highlightColor }}
            >
              <strong className="text-xl">Check out the final prototype</strong>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 mt-10 grid lg:grid-cols-6 grid-cols-2">
          <div className="my-5 lg:col-span-6 col-span-2">
            <span className="p-1" style={{ backgroundColor: highlightColor }}>
              "There’s loads more that went into the creation of this feature" —
              Ron Weasley
            </span>
          </div>
          {loads.map((load, index) => (
            <div
              key={load.title}
              className={`col-span-1 ${index >= 2 ? 'mt-10' : ''}`}
            >
              <h5 className="font-bold">{load.title}</h5>
              <ul className="mt-3">
                {load.items.map((item) => (
                  <li className="mt-1" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3 mt-20 lg:mt-32">
          <h4 className="font-serif text-3xl">Final Thoughts</h4>
          {finalThoughts.map((finalThought) => (
            <p key={finalThought} className="mt-10">
              {finalThought}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalPrototype
