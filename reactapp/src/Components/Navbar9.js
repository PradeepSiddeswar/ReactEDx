import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export default function Navbar9() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) => (
                <div className='fixed-bottom floating-action-button'>
                    <Button variant="contained" {...bindTrigger(popupState)} style={{ backgroundColor: '#00262b', padding: '15px 25px', marginBottom: '1.6rem', right: '1.5rem', float: 'right', borderRadius: '1rem' }}>
                        <img src='https://www.edx.org/images/experiments/xpert/xpert-logo.svg' style={{ width: '100px' }}></img>
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography sx={{ p: 2, backgroundColor: '#00262b', color: 'white' }}>
                            <h2>Xpert</h2>
                            <span class="small text-accent-b" style={{ color: '#f0cc00' }}>An AI-powered educational tool</span>
                            <button type='button' class="ml-auto mt-3 mr-3 p-0 border-0 btn btn-inverse-outline-primary" style={{ color: 'white' }}>
                                <CloseIcon />

                            </button>
                            <div className=''>

                                <AssistantDirectionIcon />
                            </div>
                            <div>


                                <h3 class="xpert-chatbot-popup__disclaimer--instruction-title">Course discovery</h3>
                                <span class="xpert-chatbot-popup__disclaimer--instruction-text">Find the best learning option for you</span>
                            </div>
                            <div class="">
                                <PeopleAltIcon />
                                <h3 class="xpert-chatbot-popup__disclaimer--instruction-title">Learner support</h3>
                                <span class="xpert-chatbot-popup__disclaimer--instruction-text">Get help resolving technical or other issues</span>

                                <div class="">
                                    <p class="xpert-chatbot-popup__disclaimer--text"><strong>Note:</strong>&nbsp;This chat is AI generated (powered by ChatGPT), <br></br>mistakes are possible.<br></br> By using it you agree that edX may create <br></br>a record of this chat.<br></br> Your personal data will be used as described in our <a href="https://www.edx.org/edx-privacy-policy" target="_blank" rel="noopener noreferrer" class="xpert-chatbot-popup__disclaimer__link">privacy policy</a>.</p>
                                    <div class="form-group" style={{ textAlign: 'right', width: '50%' }}>
                                        <textarea row="10" cols="20"
                                            type="text"
                                            id="input"
                                            formControlName="txt"
                                            placeholder="Write a message">
                                        </textarea>
                                        <span class="">
                                            {/* <SendIcon /> */}
                                        </span>
                                    </div>

                                </div>
                            </div>                </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

