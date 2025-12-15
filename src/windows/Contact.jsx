import { WindowControlls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="contact" />
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5 ">
                <img src="/images/photo.jpeg" alt="Sai Kiran" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got something on your mind—an idea, a hiccup, or just tech chatter? Happy to chat.</p>
                <p>saikiranjavalkar@gmail.com</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
