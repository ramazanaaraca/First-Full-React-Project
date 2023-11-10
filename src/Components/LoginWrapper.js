

const LoginWrapper = ({ children , className }) => {
  return (
    <div className={`${className} bg-[#F7F7F7] lg:p-10 py-10 px-6 rounded-[20px]`}>
        {children}
    </div>
  )
}

export default LoginWrapper