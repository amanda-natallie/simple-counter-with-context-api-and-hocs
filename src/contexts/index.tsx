import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from 'react'

export interface State {
  value: number
}

export type Action =
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number }

export interface ContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export interface ProviderProps {
  children: ReactNode
}
export const initialState: State = { value: 0 }

export const StateContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
})

export const ValueContext = createContext<number>(0)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + action.payload }
    case 'DECREMENT':
      return { value: state.value - action.payload }
    default:
      return state
  }
}

export const StateProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
  )
}

export const ValueProvider: FC<ProviderProps> = ({ children }) => {
  const { state } = useContext(StateContext) || {}
  return <ValueContext.Provider value={state?.value}>{children}</ValueContext.Provider>
}
