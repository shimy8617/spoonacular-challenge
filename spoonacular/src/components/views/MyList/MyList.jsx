import { Header } from "../../Header/Header";

export const MyList = () => {
  return (
    <>
      <Header />
      <main id="list">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mi Lista</h2>
          </div>
          <div className="list">
            <div className="card">
              <div className="close">x</div>
              <h3>Title</h3>
              <img href="" alt="" />
              <p>Summary</p>
              <h6>precio</h6>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
