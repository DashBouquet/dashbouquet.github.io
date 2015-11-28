
### Целевая платформа
Разработка ведется на Mac OS X в среде xCode. Целевая мобильная платформа iOS. 
Разработка для текущей главной версии iOS с последующим переходом на следующую версию за месяц до ее официального выхода.


### Языки программирования

Текущие проекты разрабатываются на Objective-C и JavaScript. В будущем будет сделан переход на Swift, когда спецификация языка станет постоянной. Проекты будут поддерживать смешанный подход: Objective-C и Swift в рамках одного проекта. 

### Библиотеки

|                             | Standart | SQL | Deep Linking | Facebook integration | Statistics | Backend | Network communication |
|-----------------------------|:--------:|:---:|--------------|:--------------------:|:----------:|:-------:|:---------------------:|
| Apple  provided  frameworks |     +    |  +  |              |                      |            |         |                       |
| FMDB                        |          |  +  |              |                      |            |         |                       |
| Crashlytics                 |          |     |              |                      | +          |         |                       |
| Testfairy                   |          |     |              |                      | +          |         |                       |
| Fabric                      |          |     |              |                      | +          |         |                       |
| TestFlight                  |          |     |              |                      | +          |         |                       |
| Branch.io                   |          |     | +            |                      | +          |         |                       |
| Parse                       |          |     |              | +                    |            | +       | +                     |
| Facebook Utils              |          |     |              | +                    |            |         |                       |
| AFNetworking                |     +    |     |              |                      |            |         | +                     |
|                             |          |     |              |                      |            |         |                       |

### Тестирование
* XCTest используется для тестирования внутренней логики
* Appium для тестирования пользовательского интерфейса 

### CI и автоматическая сборка приложения
В качестве continuous integration сервиса используется [CircleCI](https://circleci.com/). Для автоматической сборки приложения в текущий момент используется набор утилит от [nomad](https://github.com/nomad). В будущем планируется перейти на [Fastlane](https://fastlane.tools/).

### Стиль кода

* [Apple](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210-CH1-SW1)