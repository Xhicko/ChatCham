const videoCallButton = document.querySelector('.Video_on');
let isVideoCallActive = false;
let mute = document.querySelector('.muted')
let unmute = document.querySelector('.unmute')
const videoOff = document.querySelector('.videoOff')
const videoOn = document.querySelector('.videoOn')

videoCallButton.addEventListener('click', () => {
isVideoCallActive = !isVideoCallActive; 

if (isVideoCallActive) {
    videoCallButton.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-camera-video-off Video_Off" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56-10-14 .814-.58 10 14-.814.58z"/></svg>';
    mute.style.display = 'flex'
    unmute.style.display = 'none'
    videoCallButton.style.backgroundColor = '#ce0202';
    videoCallButton.style.color = '#fff';

    // Message 
    videoOff.style.display = 'flex';
    setTimeout(() => {
        videoOff.style.display = 'none';
    }, 1000);

} 
else {
    videoCallButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-camera-video Video_On" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/></svg>'; 
    unmute.style.display = 'flex'
    mute.style.display = 'none'
    videoCallButton.style.backgroundColor = '#fff'; 
    videoCallButton.style.color = '#000';

      // Message 
    videoOn.style.display = 'flex';
    setTimeout(() => {
        videoOn.style.display = 'none';
    }, 1000);
}
});

const voiceCallButton = document.querySelector('.Microphone_on');
let isVoiceCallActive = false;
let sound = document.querySelector('.sound')
let noSound = document.querySelector('.no_sound')
let microphoneOn = document.querySelector('.microphoneOn')
let microphoneOff = document.querySelector('.microphoneOff')

voiceCallButton.addEventListener('click', () => {
    isVoiceCallActive = !isVoiceCallActive; 
if (isVoiceCallActive) {
    voiceCallButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-mic-mute Microphone_Off" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z"/><path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/></svg>'; 
    sound.style.display = 'none'
    noSound.style.display = 'flex'
    voiceCallButton.style.backgroundColor = '#ce0202';
    voiceCallButton.style.color = '#fff';

      // Message 
    microphoneOff.style.display = 'flex';
    setTimeout(() => {
        microphoneOff.style.display = 'none';
    }, 1000);

   
} 
else {
    voiceCallButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-mic Microphone_On" viewBox="0 0 16 16"><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/><path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/></svg>';
    noSound.style.display = 'none'
    sound.style.display = 'flex'
    voiceCallButton.style.backgroundColor = '#fff';
    voiceCallButton.style.color = '#000';

      // Message 
      microphoneOn.style.display = 'flex';
    setTimeout(() => {
        microphoneOn.style.display = 'none';
    }, 1000);

}
});


let  chatTabs = document.querySelector('.Chat_Tabs')
let participantTabs = document.querySelector('.Participant_Tabs')
let participantWindow = document.querySelector('.Participants')
let chatWindow = document.querySelector('.Chat')
let chatStrong = document.querySelector('.Chat_Strong')
let participantstrong = document.querySelector('.Participant_Strong')

participantTabs.addEventListener('click', function(){
    participantWindow.style.display = 'flex'
    participantTabs.style.backgroundColor = '#1d1d22fb'
    participantTabs.style.color = '#fff'
    participantTabs.style.border = 'none'
     participantstrong.style.backgroundColor = '#fff'
    chatWindow.style.display = 'none'
    chatTabs.style.backgroundColor = '#fff'
    chatTabs.style.color = '#1d1d22fb'
    chatTabs.style.borderStyle = 'solid'
    chatTabs.style.borderWidth = '2px'
    chatTabs.style.borderColor = '#1d1d22fb'
    chatStrong.style.backgroundColor = '#1d1d22fb'
} )

chatTabs.addEventListener('click', function(){
    chatWindow.style.display = 'flex'
    chatTabs.style.backgroundColor = '#1d1d22fb'
    chatTabs.style.border = 'none'
    chatTabs.style.color = '#fff'
    chatStrong.style.backgroundColor = '#fff'
    participantWindow.style.display = 'none'
    participantTabs.style.backgroundColor = '#fff'
    participantTabs.style.color = '#1d1d22fb'
    participantTabs.style.borderStyle = 'solid'
    participantTabs.style.borderWidth = '2px'
    participantTabs.style.borderColor = '#1d1d22fb' 
    participantstrong.style.backgroundColor = '#1d1d22fb'
} )


let sideWindow = document.querySelector('.Side_Window')
let sideWrapperIcon = document.querySelector('.sideWrapper')

sideWrapperIcon.addEventListener('click', function (){
    sideWindow.classList.toggle('activate')
})
