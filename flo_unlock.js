var body = $response.body;

// 解析 JSON 响应
var obj = JSON.parse(body);

// 修改 expiration_date
obj.expiration_date = "2033-12-20T02:59:41Z";
obj.transaction_id = 490001562452421;
obj.status = "active";
obj.used_intro_gr1 = true;
obj.auto_renew_status = true;

// 将修改后的 JSON 对象转换回字符串
body = JSON.stringify(obj);

$done({ body });
