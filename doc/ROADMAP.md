#Brainstorming
* I want to create a **Persona** in order to structure my content around persons 
* I want to update the basic details of a **Persona** I case something changed or I made a mistake
* I want to remove a **Persona** in case I made an error

#Data model

##Persona:Object
* id:uuid
* profile:Profile
* tags:List\<String>

##Entry:Object
* id:uuid
* personas:List\<Persona>
* tags:List\<String>
* created:Date
* date:Date
* changed:Date

##Loop:Entry
* loopType:String (image, text, free)
* title:String
* description:String
* recurrence:String (none, daily, every x day/month/year)
* notificationEnbaled:boolean

##PhotoLoopItem:Entry
* loop:Loop
* image:Image
* desciption:String

##MediLoopItem:??
*...

##LogLoopItem:??
*