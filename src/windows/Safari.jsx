import { WindowControlls } from "#components"
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, ShieldHalf, Share, MoveRight } from "lucide-react"

const Safari = () => {
    return (
        <>
            <div id="window-header" className="safari-header">
                <WindowControlls target="safari" />
                <PanelLeft className="ml-1 icon" />
                
                <div className="flex items-center gap-3">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-4 flex-center gap-3">
                    <ShieldHalf className="icon" />
                    <div className="icon">
                        <Search className="icon"></Search>
                    </div>
                    <input type="text" placeholder="Search or paste website name" className="flex-1" />
                </div>
                <div className="flex items-center gap-5">
                    <Share className="icon"></Share>
                    <Plus className="icon"></Plus>
                    <Copy className="icon"></Copy>
                </div>
            </div>

            <div className="blog">
                <h2>My Blog</h2>

                <div className="space-y-8">
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    Check out the full post <MoveRight className="icon-hover" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow
