## Classes

<dl>
<dt><a href="#Wng">Wng</a></dt>
<dd><p>Wng class</p>
</dd>
<dt><a href="#WngRequest">WngRequest</a></dt>
<dd><p>WngRequest class</p>
</dd>
</dl>

<a name="Wng"></a>

## Wng
Wng class

**Kind**: global class  
**Author**: Léo DESIGAUX  

* [Wng](#Wng)
    * [new Wng($consumerKey)](#new_Wng_new)
    * [.get($path, $data)](#Wng+get) ⇒ [<code>WngRequest</code>](#WngRequest)

<a name="new_Wng_new"></a>

### new Wng($consumerKey)
Wng Constructor, adds 'wng' to window object on success


| Param | Type | Description |
| --- | --- | --- |
| $consumerKey | <code>String</code> | Consumer key needed to call API, get one here https://cas.whyno.group/request_credential |

<a name="Wng+get"></a>

### wng.get($path, $data) ⇒ [<code>WngRequest</code>](#WngRequest)
Construct a GET Request

**Kind**: instance method of [<code>Wng</code>](#Wng)  
**Returns**: [<code>WngRequest</code>](#WngRequest) - return built WngRequest  

| Param | Type | Description |
| --- | --- | --- |
| $path | <code>String</code> | API Path |
| $data | <code>Object</code> | Data object passed to API |

<a name="WngRequest"></a>

## WngRequest
WngRequest class

**Kind**: global class  
**Author**: Léo DESIGAUX  

* [WngRequest](#WngRequest)
    * [new WngRequest($method, $data)](#new_WngRequest_new)
    * [.send()](#WngRequest+send) ⇒ <code>Object</code>

<a name="new_WngRequest_new"></a>

### new WngRequest($method, $data)
WngRequest Constructor


| Param | Type | Description |
| --- | --- | --- |
| $method | <code>String</code> | Method of request (GET, POST, PUT, DELETE) |
| $data | <code>Object</code> | Data object passed to request |

<a name="WngRequest+send"></a>

### wngRequest.send() ⇒ <code>Object</code>
Send the request

**Kind**: instance method of [<code>WngRequest</code>](#WngRequest)  
**Returns**: <code>Object</code> - Response object  
