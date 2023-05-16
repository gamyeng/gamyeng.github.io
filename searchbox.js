const form = document.querySelector('form');
const input = document.querySelector('input[name="wd"]');
const button = document.querySelector('button[type="submit"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表单默认提交行为

  const searchTerm = input.value.trim(); // 获取输入框中的搜索关键词并去除首尾空格
  if (!searchTerm) return; // 如果搜索关键词为空，则直接返回

  button.disabled = true; // 将按钮禁用，防止重复点击
  button.innerHTML = '搜索中...'; // 更新按钮的文本内容，提示正在搜索中

  fetch(`https://www.baidu.com/s?wd=${searchTerm}`, {method: 'GET'}) // 发送GET请求到百度搜索引擎，并传入搜索关键词作为查询参数
    .then(response => response.json()) // 将响应转换为JSON格式数据进行处理和展示(例如在页面上显示搜索结果)
    .catch(error => console.error(error)) // 如果出现错误，则在控制台输出错误信息
    .then(() => button.disabled = false) // 当搜索完成时，启用按钮的功能，允许用户再次点击进行搜索操作。如果出现错误，则不会执行该步骤。
    .catch(() => {}); // 如果出现任何其他错误，则不做任何处理。这可以防止在某些情况下出现意外的错误。例如，当网络连接中断时，可能会导致服务器无法正常工作。但是，由于我们已经禁用了按钮，因此用户将无法再次点击它。