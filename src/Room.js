import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const {roomID}=useParams();
    let myMeeting= async (element)=>{
        const appID = 1588119625;
        const serverSecret = "0f11ce6065641a408ea5467bcea79afc";

        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Manik");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy link',
                url: `https://localhost3000/room/${roomID}`
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showRoomTimer: true
            // showRoomDetailsButton: true
          });

    }
  return (
    <>
    <div ref={myMeeting}></div>
    </>
  )
}

export default Room