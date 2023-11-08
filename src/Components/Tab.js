import { useState , useReducer } from "react"
import TabButton from "./TabButton"
import Wrapper from "./Wrapper"
import { EXAMPLES } from "../data";


const Tab = () => {

 function reducer(state , action) {
  switch(action.type) {
    case 'CHANGE' :
      return {
        activeTab: action.activeTab, 
      }
      default :
      return state;
  }

 }

 const [state, dispatch] = useReducer(reducer, 
  {activeTab : 'About Training'}

  )

 function handleselect(tab) {
  dispatch({
    type : 'CHANGE',
    activeTab : tab
  })
  console.log(tab)
 }

  

 

  return (
    <div className="flex items-start  gap-10 h-[240px] relative mb-[148px]">
        {
          EXAMPLES.map((tab) => (
            <div className="flex flex-col ">
                <div className="flex items-center">
                <TabButton
                title={tab.title}
                onSelect={() => handleselect(tab.title)}
                className={state.activeTab === tab.title && 'border-b-[#E43D30] border-b font-medium'}
              />
                </div>
              <div className="absolute z-0 top-[70px] left-0 duration-300 ease-out w-100">
                {
                  state.activeTab === tab.title ? <div className='p-5 border border-[#DBDBDB] rounded-[20px]'>
                    <h3>{tab.title}</h3>
                <p>{tab.description}</p>
                <pre>
                  <code>
                    {tab.code}
                  </code> 
                </pre> 
                
                  </div> : null
                }
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Tab