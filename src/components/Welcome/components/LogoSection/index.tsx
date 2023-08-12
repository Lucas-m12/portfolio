
export const LogoSection = () => {
  return (
    <section
      className="
        flex max-w-[400px] h-[360px] flex-col justify-center items-end flex-header self-stretch relative mobile:items-center
      "
    >
      <div
        className="w-[280px] h-[320px] left-[80px] absolute flex-shrink-0 border-8 border-solid border-gray-default dark:border-gray-dark-default bg-gray-200 dark:bg-gray-dark-200 bg-cover bg-no-repeat z-10 mobile:w-[240px] mobile:h-[280px] mobile:left-[52px] mobile:top-0"
        style={{
          backgroundImage: "url(https://github.com/lucas-m12.png)"
        }}
      >
      </div>
      <div 
        className="w-[280px] h-[320px] flex-shrink-0 border-8 border-solid border-gray-default dark:border-gray-dark-default bg-gray-200 dark:bg-gray-dark-200 absolute left-[120px] top-[40px] mobile:w-[280px] mobile:h-[280px] mobile:left-[31.5px] mobile:top-[20px]"
      />
    </section>
  )
}