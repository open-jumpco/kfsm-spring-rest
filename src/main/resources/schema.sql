CREATE TABLE IF NOT EXISTS TURNSTILE_INFO (
    id bigint auto_increment,
    locked_b bit,
    message_s varchar(255)
);
