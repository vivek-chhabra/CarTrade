import Image from "next/image";
import "./Footer.scss";

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="Footer flex-col">
            <div className="container">
                <div className="top flex">
                    <div className="left flex-col">
                        <Image src="/logo.svg" width={5} height={5} alt="logo" />
                        <p>
                            Carhub 2023 <br /> All Rights Reserved ©
                        </p>
                    </div>
                    <div className="right flex">
                        <div className="col-1 flex-col">
                            <h3>About</h3>
                            <p>How it works</p>
                            <p>Featured</p>
                            <p>Partnership</p>
                            <p>Business Relation</p>
                        </div>
                        <div className="col-2 flex-col">
                            <h3>Company</h3>
                            <p>Events</p>
                            <p>Blog</p>
                            <p>Podcast</p>
                            <p>Invite a friend</p>
                        </div>
                        <div className="col-3 flex-col">
                            <h3>Socials</h3>
                            <p>Discord</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom ">
                <div className="container flex">
                    <p>@2023 CarHub. All rights reserved</p>
                    <div className="right flex">
                        <p>Privacy & Policy</p>
                        <p>Terms & Condition</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
