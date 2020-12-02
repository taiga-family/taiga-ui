from selenium import webdriver

capabilities = webdriver.DesiredCapabilities.CHROME.copy()
WD_URL = 'http://localhost:8001'

driver = webdriver.Remote(desired_capabilities=capabilities, command_executor=WD_URL)

print "Loading angularjs.org"
driver.get('https://angularjs.org/')

print "Testing hello app"
sample_app = driver.find_element_by_css_selector("[app-run='hello.html']")
sample_app.location_once_scrolled_into_view
name_box = sample_app.find_element_by_css_selector('[ng-model="yourName"]')
hello_box = sample_app.find_element_by_css_selector('h1')

name_box.send_keys('Bob')

assert "Hello Bob!" in hello_box.text

print "Testing todo app"
todo_app = driver.find_element_by_css_selector("[app-run='todo.html']")
todo_app.location_once_scrolled_into_view
todo_input = todo_app.find_element_by_css_selector('[ng-model="todoList.todoText"]')
todo_list = todo_app.find_element_by_css_selector('ul')

todo_input.send_keys('write some tests');
add_button = todo_app.find_element_by_css_selector('[value="add"]')
add_button.click()

assert 'write some tests' in todo_list.text
