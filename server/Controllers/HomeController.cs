using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using JoditHtmx.Models;

namespace JoditHtmx.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult GetEditorPartial()
    {
        // Eventuelt kan du sende med data, for eksempel et unikt id.
        return PartialView("_EditorPartial");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
