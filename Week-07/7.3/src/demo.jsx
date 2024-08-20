import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { ConnectionAtom, MessageAtom, NotificationAtom } from './atom'

function App() {

  return(
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

function Main(){
  const connectionCount = useRecoilValue(ConnectionAtom); // only gets access to value 
  const messageCount = useRecoilValue(MessageAtom);
  const [notificationCount,setNotificationCount] = useRecoilState(NotificationAtom); // state helps to update val and access value 
// useSetRecoilState => only gives setValue function and only updates the state , has no access to value 
  return(
    <div>
      <button>Home</button>
      <button>Connections({connectionCount > 10 ? "10+" : connectionCount})</button>
      <button>Messages({messageCount > 10 ? "10+" : messageCount})</button>
      <button>Notification({notificationCount > 99 ? "99+" : notificationCount})</button>
      <button onClick={() => {
        setNotificationCount(notificationCount + 1)
      }}>Inc Notification</button>
    </div>
  )
}

export default App
