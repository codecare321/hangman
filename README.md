# Hangman

# Facts

```
tailwind or bootstrap most famous disadvantage

 in classname you have to write a lot class

 and in early stage startup where repeted css written over there thats why use tailwind css or other



  Form default behavior is page refresh
  e.preventDefault(); will not allow to do default behaviour


  Single programming responsibility tell that
  only function one responsibillity


  suppose form responsibility
    ui responsibilty how it look
    form submit logic implement
    texxt input change logic




Presenter Container Pattern

if you have component

in 2 layer visualize the component

1 layer =  presentation layer (how it look)

2 layer = container layer (what logical? )

container layer call the presentation layer

```



# tailwind property

```
    1 tailwind unit : 4px

    px-4 : x access 4 tailwind unit (16px)

    py-4: y access 4 tailwind unit (16px)


    if you want to do custom css in class name you can write like this

    px-[17px]


    if you write border in classname = border

    border: 1px

    you dont have to assume for this you can see tailwind class

    rounded you can give border type rounded and other

    rounded: 4px

    rounded-md: 6px

    w-full == will take full width of parent class





```

# calling function in class name

```

function getButtonStyling(styleType) {
  if (styleType === "primary") {
    return "bg-blue-500";
  } else if (styleType === "secondary") {
    return "bg-gray-500";
  } else if (styleType === "error") {
    return "bg-red-500";
  } else if (styleType === "success") {
    return "bg-green-500";
  } else if (styleType === "warning") {
    return "bg-yellow-500";
  }
}


className={`${getButtonStyling(styleType)}}


```

# common JSX Facts

```

  you can only write single parent in return.
  in parent you can write nested

  if you dont want to do in node of dom

  then you can use fragment <></>

  you can write comment like this in component
       {/*  */}




```
