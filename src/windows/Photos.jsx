import { Mail, Search } from "lucide-react";
import useWindowStore from "#store/window";
import { WindowControlls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

/* Only 3 images */
const IMAGES = [
  { id: 1, src: "/images/photo.jpeg" },
  { id: 2, src: "/images/mee.jpeg" },
  { id: 3, src: "/images/group.jpeg" },
];

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControlls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      {/* Photos Content */}
      <div className="w-full h-full p-6 overflow-auto bg-white">
        <ul className="grid grid-cols-3 gap-6">
          {IMAGES.map(({ id, src }) => (
            <li
              key={id}
              className="cursor-pointer"
              onClick={() =>
                openWindow("imgfile", {
                  id,
                  name: `Photo ${id}`,
                  icon: "/images/image.png",
                  kind: "file",
                  fileType: "img",
                  imageUrl: src,
                })
              }
            >
              <img
                src={src}
                alt={`Photo ${id}`}
                className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
