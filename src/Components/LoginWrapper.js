

const LoginWrapper = ({ children , className }) => {
  return (
    <div className={`${className} bg-[#F7F7F7] p-10 rounded-[20px]`}>
        {children}
    </div>
  )
}

export default LoginWrapper