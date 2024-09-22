use axum::{
    routing::{get, post},
    http::StatusCode,
    Json, Router,
};
use tracing;

use sherloq_api::tracing::init_tracing;

#[tokio::main]
async fn main() {
    init_tracing();

    let app = Router::new()
        .route("/", get(root));


    let addr = "127.0.0.1:3000".parse().unwrap();
    tracing::info!("Server running on http://{}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn root() -> &'static str {
    "Welcome to the simple Axum API!"
}
