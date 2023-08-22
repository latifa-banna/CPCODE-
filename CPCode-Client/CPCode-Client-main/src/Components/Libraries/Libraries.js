import styled from "styled-components";
import Image1 from "../Assets/logo.png";

import { Link } from "react-router-dom";

export default function Libraries() {
    const listLibrary = ["Bootstrap", "Tailwind", "CSS", "Bootstrap", "Tailwind", "CSS", "Bootstrap", "Tailwind", "CSS", "Bootstrap"];

    const LibraryContainer = styled.div`
        display: flex;
        flex-wrap : wrap;
        justify-content : space-around;
        gap : 5rem;
        margin : 3rem;
        padding-top : 3rem;
        `;

    const LibraryCard = styled.div`
        flex-basis: auto%;
        max-width: 100%;
        }`;
    return (
        <LibraryContainer>
            {
                listLibrary.map((library) => {
                    return (
                        <LibraryCard>
                            <Link to="/" style={{ textDecoration : "none" , color : "black"}}>
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '1.875rem',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                                    width: '18.75rem',
                                    height: '13.75rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <   img src={Image1} alt="image1" style={{ maxWidth: '60%', maxHeight: '80%', position: 'relative', top: '1.25rem' }} />
                                    <h2 style={{ margin: '1.25rem 0', textAlign: 'center' }}>{library}</h2>
                                </div>
                            </Link>
                        </LibraryCard>
                    )
                })
            }
        </LibraryContainer>
    )
}