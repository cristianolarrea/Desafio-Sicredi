package base;

import io.restassured.http.ContentType;

public interface Constants {

    String APP_BASE_URL = "http://localhost/api/v1";
    String APP_BASE_PATH = "";
    int APP_PORT = 8080;
    ContentType APP_CONTENT_TYPE = ContentType.JSON;
}
