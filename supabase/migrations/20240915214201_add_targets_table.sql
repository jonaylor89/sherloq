CREATE TABLE targets (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    version INT NOT NULL DEFAULT 1,
    user_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    initial_attrs JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, version),

    FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
