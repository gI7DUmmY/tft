const News = () => {
  return (
    <section className='w-full parallax' id='news'>
      <div className='pt-24 h-[35vh]'>
        <h1 className='text-center font-extrabold text-3xl text-slate-50 drop-shadow-black font-mono uppercase'>
          news
        </h1>
      </div>
      <div className='h-[500px] bg-slate-200' id='facebook'>
        <iframe
          id='gmap'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.985564825796!2d1.429965976864997!3d43.648468671102364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea497e3f0544b%3A0xb4d8b5637610e11b!2sCentre%20d&#39;Animation%20de%20Lalande!5e0!3m2!1sfr!2sfr!4v1696405649237!5m2!1sfr!2sfr'
          className='w-full h-full'
        ></iframe>
      </div>
    </section>
  )
}

export default News
