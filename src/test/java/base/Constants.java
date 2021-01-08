package base;

import io.restassured.http.ContentType;

public interface Constants {

    String APP_BASE_URL = "http://localhost/api/v1";
    Integer APP_PORT = 8080;
    String APP_BASE_PATH = "";
    ContentType APP_CONTENT_TYPE = ContentType.JSON;
}
