import PageWrapper from 'src/wrappers/PageWrapper';

export default function Home() {
  return (
    <PageWrapper
      isDarkMode
      seoProps={{
        title: 'home',
      }}
    >
      <section className="hero items-center h-screen flex">
        <div className="container mx-auto">
          <div className="w-2/3">
            <h1 className="text-5xl">
              Hi my name is
              <br />
              <span className="text-primary"> Jose Adrian Buctuanon</span>
            </h1>
            <p className="text-2xl">
              I am a fullstack developer based in
              <span className="text-primary">12.8797° N, 121.7740° E</span>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
