import "./description.css";
import { CheckedIcon, DeleteIcon, DragIcon, PdfIcon } from '../../common/svg';

const Description = () => {
    return (
        <section className="description">
            <div className="container">
                <div className="description_data">
                    <div className="description_cover">

                        <div className="des_overview">
                            <h4>Description</h4>
                            <p>
                                Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                        </div>
                        <div className="resources_cover">
                            <div className="resources">
                                <h4>Resources</h4>
                                <ul>
                                    <li className="photos">Photos</li>
                                    <li>Videos</li>
                                    <li>Documents</li>
                                </ul>
                            </div>
                            <section className="drag_drop">
                                <div className="drag">
                                    <div className="drag_items">
                                        <DragIcon />
                                        <h4>Drag & drop it here or Choose a file</h4>
                                        <span>Supported format csv, xls, csv etc.</span>
                                        <button className="upload">Upload file</button>
                                    </div>
                                </div>
                            </section>
                            <div className="uploaded">
                                <h5>Uploaded Files</h5>
                                <div className="pdf_cover">
                                    <div className="upload_data">
                                        <div className="pdf_data">
                                            <PdfIcon />
                                            <div>

                                                <h4>Airbag-certificate.pdf</h4>
                                                <h5>94 KB of 94 KB   <i>
                                                    <CheckedIcon />
                                                </i>
                                                    Completed
                                                </h5>
                                            </div>
                                        </div>
                                        <DeleteIcon />
                                    </div>
                                    <div className="file_type">
                                        <strong>File Type </strong> <span> Breakdown</span>
                                    </div>
                                    <div className="pdf_profile">
                                        <img src="./img//img1.png" alt="" />
                                        <div className="pdf_data">
                                        <strong>Admin Transport </strong> <span>  Austin Robertson</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vechile">
                                <div className="vechile_cover">
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />
                                    <img src="./img/vechile.png" alt="" />

                                </div>
                                <button className="save">Save</button>

                            </div>

                        </div>
                    </div>

                    <div className="notes_cover">
                        <div className="notes">
                            <h4>Notes</h4>
                        </div>
                        <ul>
                            <li>
                                <img src="./img/img1.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img2.png" alt="img1" />
                                <div>
                                    <h4>Mark Steve <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing and  dummy text of the printing and typesetting industry.</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img3.png" alt="img1" />
                                <div>
                                    <h4>Jhon Deo <span>04/03/2024 03:24:38</span></h4>
                                    <p>Simply simply dummy text of the printing and  dummy text of the printing and typesetting industry. Lorem Ipsum has ry's standard dummy</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img4.png" alt="img1" />
                                <div>
                                    <h4>Mark Steve <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy text of the printing.</p>
                                </div>
                            </li>
                            <li>
                                <img src="./img/img5.png" alt="img1" />
                                <div>
                                    <h4>Alex Noman <span>04/03/2024 03:24:38</span></h4>
                                    <p>Lorem Ipsum is simply simply dummy printing and  dummy text of the printing and typesetting industry</p>
                                </div>
                            </li>

                            <li className="text_area">
                                <textarea placeholder='Add New Notes'>
                                </textarea>
                                <button><img src="./img/subscribe.png" alt="subscribe" /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description