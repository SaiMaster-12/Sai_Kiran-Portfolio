// windows/text.jsx
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import useWindowStore from "#store/window.js";

const TextFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            {/* DO NOT TOUCH HEADER STRUCTURE */}
            <div id="window-header">
                <WindowControlls target="txtfile" />
                <h2>{name}</h2>
            </div>

            {/* Scrollable body */}
            <div
                className="p-5 space-y-6 bg-white overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 120px)" }}
            >
                {image && (
                    <div className="w-full">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded"
                        />
                    </div>
                )}

                {subtitle && (
                    <h3 className="text-lg font-semibold">
                        {subtitle}
                    </h3>
                )}

                {Array.isArray(description) && (
                    <div className="space-y-4 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
